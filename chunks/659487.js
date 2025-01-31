n.d(t, { w: () => o }), n(47120), n(724458);
var i = n(356659);
let r = [
        (e) => {
            let t = {
                ...e,
                version: 1,
                applicationName: e.gameName,
                applicationId: void 0
            };
            return delete t.gameName, t;
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
    a = null;
function s(e) {
    return null != a
        ? a
        : (a = e
              .object({
                  id: e.string().required(),
                  version: e.number().positive().integer().min(0).max(i.Bg).optional(),
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
async function o(e) {
    let t = (await n.e('85441').then(n.t.bind(n, 826753, 23))).default,
        i = s(t);
    try {
        t.assert(e, i);
        let n = e;
        return null == n.version && (n.version = 0), r.slice(n.version).reduce((e, t) => t(e), n);
    } catch (e) {
        return null;
    }
}
