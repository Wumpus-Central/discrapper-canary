"use strict";
n.d(t, { q: () => l });
var r = n(372684),
    i = n(696016);
let a = [
        (e) => {
            let t = { ...e, version: 1, applicationName: e.gameName, applicationId: void 0 };
            return delete t.gameName, t;
        },
        (e) => ({ ...e, version: 2, name: e.name.startsWith("Clip - ") ? void 0 : e.name }),
        (e) => ({ ...e, version: 3, name: "" === e.name ? void 0 : e.name }),
        (e) => {
            let t = e.filepath.endsWith(".jpeg") || e.filepath.endsWith(".jpg");
            return { ...e, version: 4, timeline: [], type: t ? r.nQ.SCREENSHOT : r.nQ.CLIP };
        },
    ],
    s = null;
function o(e) {
    return null != s
        ? s
        : (s = e
              .object({
                  id: e.string().required(),
                  version: e.number().positive().integer().min(0).max(i.kd).optional(),
                  name: e.string().when("version", { is: e.number().less(3), then: e.string().allow("") }),
                  gameName: e
                      .string()
                      .when("version", {
                          is: e.number().greater(0).required(),
                          then: e.forbidden(),
                          otherwise: e.required(),
                      }),
                  applicationName: e
                      .string()
                      .when("version", {
                          is: e.number().greater(0).required(),
                          then: e.required().allow(""),
                          otherwise: e.forbidden(),
                      }),
                  applicationId: e.string(),
                  activity: e
                      .object()
                      .keys({
                          state: e.string(),
                          details: e.string(),
                          timestamps: e.object().keys({ start: e.number(), end: e.number() }),
                          party: e.object().keys({ id: e.string(), size: e.array().items(e.number()) }),
                      }),
                  users: e.array().items(e.string()).required(),
                  filepath: e.string().required(),
                  length: e.number().required(),
                  thumbnail: e.string().required().allow(""),
                  editMetadata: e
                      .object()
                      .keys({
                          start: e.number(),
                          end: e.number(),
                          applicationAudio: e.boolean(),
                          voiceAudio: e.boolean(),
                          soundboardAudio: e.boolean(),
                      }),
                  type: e
                      .string()
                      .allow(r.nQ.CLIP, r.nQ.SCREENSHOT, r.nQ.VOICE_CLIP)
                      .when("version", {
                          is: e.number().greater(3).required(),
                          then: e.required(),
                          otherwise: e.forbidden(),
                      }),
                  clipMethod: e.string().allow("auto", "manual").required(),
                  guildId: e.string(),
                  channelId: e.string(),
                  isFavorite: e.boolean(),
                  isTemporary: e.boolean(),
                  decision: e
                      .object()
                      .keys({
                          reason: e.string(),
                          clippingPressure: e.number(),
                          currentThreshold: e.number(),
                          effectivePressure: e.number(),
                          timestamp: e.number(),
                          emotionHistory: e
                              .array()
                              .items(
                                  e
                                      .object()
                                      .keys({
                                          timestamp: e.number(),
                                          userId: e.string(),
                                          emotions: e.object().unknown(),
                                      }),
                              ),
                          signal: e.object().required(),
                      }),
                  timeline: e
                      .array()
                      .items(
                          e
                              .object()
                              .keys({ signal: e.object().required(), timestamp: e.number().required() })
                              .unknown(),
                      )
                      .when("version", {
                          is: e.number().greater(3).required(),
                          then: e.required(),
                          otherwise: e.forbidden(),
                      }),
              })
              .required());
}
async function l(e) {
    let t = (await n.e("34188").then(n.t.bind(n, 88137, 23))).default,
        r = o(t);
    try {
        delete e.eventTimeline,
            delete e.eventTimelineReferenceTimestamp,
            delete e.autoclipData,
            delete e.emotionHistory,
            t.assert(e, r);
        let n = e;
        return null == n.version && (n.version = 0), a.slice(n.version).reduce((e, t) => t(e), n);
    } catch (e) {
        return null;
    }
}
