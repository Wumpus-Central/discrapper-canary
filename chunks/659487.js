n.d(t, { w: () => d }), n(47120);
var r = n(356659);
function i(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                i(e, t, n[t]);
            });
    }
    return e;
}
function a(e, t) {
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
function s(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : a(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let l = [
        (e) => {
            let t = s(o({}, e), {
                version: 1,
                applicationName: e.gameName,
                applicationId: void 0
            });
            return delete t.gameName, t;
        },
        (e) =>
            s(o({}, e), {
                version: 2,
                name: e.name.startsWith('Clip - ') ? void 0 : e.name
            }),
        (e) =>
            s(o({}, e), {
                version: 3,
                name: '' === e.name ? void 0 : e.name
            })
    ],
    c = null;
function u(e) {
    return null != c
        ? c
        : (c = e
              .object({
                  id: e.string().required(),
                  version: e.number().positive().integer().min(0).max(r.Bg).optional(),
                  name: e.string().when('version', {
                      is: e.number().less(3),
                      then: e.string().allow('')
                  }),
                  gameName: e.string().when('version', {
                      is: e.number().greater(0).required(),
                      then: e.forbidden(),
                      otherwise: e.required()
                  }),
                  applicationName: e.string().when('version', {
                      is: e.number().greater(0).required(),
                      then: e.required(),
                      otherwise: e.forbidden()
                  }),
                  applicationId: e.string(),
                  users: e.array().items(e.string()).required(),
                  filepath: e.string().required(),
                  length: e.number().required(),
                  thumbnail: e.string().required().allow(''),
                  editMetadata: e.object().keys({
                      start: e.number(),
                      end: e.number(),
                      applicationAudio: e.boolean(),
                      voiceAudio: e.boolean()
                  }),
                  clipMethod: e.string().allow('auto', 'manual').required()
              })
              .required());
}
async function d(e) {
    let t = (await n.e('85441').then(n.t.bind(n, 826753, 23))).default,
        r = u(t);
    try {
        t.assert(e, r);
        let n = e;
        return null == n.version && (n.version = 0), l.slice(n.version).reduce((e, t) => t(e), n);
    } catch (e) {
        return null;
    }
}
