n.d(t, {
    q: () => f,
}),
    n(896048);
var r = n(372684),
    i = n(696016);

function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                a(e, t, n[t]);
            });
    }
    return e;
}

function o(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function l(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : o(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let c = [
        (e) => {
            let t = l(s({}, e), {
                version: 1,
                applicationName: e.gameName,
                applicationId: void 0,
            });
            return delete t.gameName, t;
        },
        (e) =>
            l(s({}, e), {
                version: 2,
                name: e.name.startsWith("Clip - ") ? void 0 : e.name,
            }),
        (e) =>
            l(s({}, e), {
                version: 3,
                name: "" === e.name ? void 0 : e.name,
            }),
        (e) => {
            let t = e.filepath.endsWith(".jpeg") || e.filepath.endsWith(".jpg");
            return l(s({}, e), {
                version: 4,
                timeline: [],
                type: t ? r.nQ.SCREENSHOT : r.nQ.CLIP,
            });
        },
    ],
    u = null;

function d(e) {
    return null != u
        ? u
        : (u = e
              .object({
                  id: e.string().required(),
                  version: e.number().positive().integer().min(0).max(i.kd).optional(),
                  name: e.string().when("version", {
                      is: e.number().less(3),
                      then: e.string().allow(""),
                  }),
                  gameName: e.string().when("version", {
                      is: e.number().greater(0).required(),
                      then: e.forbidden(),
                      otherwise: e.required(),
                  }),
                  applicationName: e.string().when("version", {
                      is: e.number().greater(0).required(),
                      then: e.required().allow(""),
                      otherwise: e.forbidden(),
                  }),
                  applicationId: e.string(),
                  activity: e.object().keys({
                      state: e.string(),
                      details: e.string(),
                      timestamps: e.object().keys({
                          start: e.number(),
                          end: e.number(),
                      }),
                      party: e.object().keys({
                          id: e.string(),
                          size: e.array().items(e.number()),
                      }),
                  }),
                  users: e.array().items(e.string()).required(),
                  filepath: e.string().required(),
                  length: e.number().required(),
                  thumbnail: e.string().required().allow(""),
                  editMetadata: e.object().keys({
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
                  decision: e.object().keys({
                      reason: e.string(),
                      clippingPressure: e.number(),
                      currentThreshold: e.number(),
                      effectivePressure: e.number(),
                      timestamp: e.number(),
                      emotionHistory: e.array().items(
                          e.object().keys({
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
                              .keys({
                                  signal: e.object().required(),
                                  timestamp: e.number().required(),
                              })
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
async function f(e) {
    let t = (await n.e("34188").then(n.t.bind(n, 88137, 23))).default,
        r = d(t);
    try {
        delete e.eventTimeline,
            delete e.eventTimelineReferenceTimestamp,
            delete e.autoclipData,
            delete e.emotionHistory,
            t.assert(e, r);
        let n = e;
        return null == n.version && (n.version = 0), c.slice(n.version).reduce((e, t) => t(e), n);
    } catch (e) {
        return null;
    }
}
