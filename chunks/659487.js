r.d(n, {
    w: function () {
        return c;
    }
});
var i = r(47120);
var a = r(724458);
var o = r(356659);
let s = [
        (e) => {
            let n = {
                ...e,
                version: 1,
                applicationName: e.gameName,
                applicationId: void 0
            };
            return delete n.gameName, n;
        },
        (e) => ({
            ...e,
            version: 2,
            name: e.name.startsWith('Clip - ') ? void 0 : e.name
        }),
        (e) => ({
            ...e,
            version: 3,
            name: '' === e.name ? void 0 : e.name
        })
    ],
    l = null;
function u(e) {
    return null != l
        ? l
        : (l = e
              .object({
                  id: e.string().required(),
                  version: e.number().positive().integer().min(0).max(o.Bg).optional(),
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
async function c(e) {
    let n = (await r.e('56268').then(r.t.bind(r, 826753, 23))).default,
        i = u(n);
    try {
        n.assert(e, i);
        let r = e;
        return null == r.version && (r.version = 0), s.slice(r.version).reduce((e, n) => n(e), r);
    } catch (e) {
        return null;
    }
}
