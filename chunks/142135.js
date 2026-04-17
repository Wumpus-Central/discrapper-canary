"use strict";
n.d(t, { q: () => c });
var r = n(835245),
    i = n(661191),
    s = n(372684),
    a = n(696016);
let o = [
        (e) => {
            let t = { ...e, version: 1, applicationName: e.gameName, applicationId: void 0 };
            return delete t.gameName, t;
        },
        (e) => ({ ...e, version: 2, name: e.name.startsWith("Clip - ") ? void 0 : e.name }),
        (e) => ({ ...e, version: 3, name: "" === e.name ? void 0 : e.name }),
        (e) => {
            let t = e.filepath.endsWith(".jpeg") || e.filepath.endsWith(".jpg");
            return { ...e, version: 4, timeline: [], type: t ? s.nQ.SCREENSHOT : s.nQ.CLIP };
        },
        (e) => ({ ...e, version: 5, id: (0, r.A)(), createdAt: i.default.extractTimestamp(e.id) }),
    ],
    l = null;
function u(e) {
    return null != l
        ? l
        : (l = e
              .object({
                  id: e.string().required(),
                  version: e.number().positive().integer().min(0).max(a.kd).optional(),
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
                  createdAt: e.number().when("version", { is: e.number().greater(4).required(), then: e.required() }),
                  type: e
                      .string()
                      .allow(s.nQ.CLIP, s.nQ.SCREENSHOT, s.nQ.VOICE_CLIP)
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
async function c(e) {
    let t = (await n.e("34188").then(n.t.bind(n, 88137, 23))).default,
        r = u(t);
    try {
        delete e.eventTimeline,
            delete e.eventTimelineReferenceTimestamp,
            delete e.autoclipData,
            delete e.emotionHistory,
            t.assert(e, r);
        let n = e;
        return null == n.version && (n.version = 0), o.slice(n.version).reduce((e, t) => t(e), n);
    } catch (e) {
        return null;
    }
}
