n.d(t, { Z: () => u }), n(47120);
var r = n(594174),
    i = n(768581),
    l = n(956664),
    a = n(996106),
    o = n(452426),
    s = n(186901),
    c = n(981631);
let u = {
    [c.Etm.GET_IMAGE]: {
        scope: s.lH,
        validation: (e) =>
            (0, o.Z)(e)
                .required()
                .keys({
                    type: e.string().required().valid(['user']),
                    id: e.string().required(),
                    format: e.string().required().valid(['png', 'webp', 'jpg']),
                    size: e.number().required().valid([16, 32, 64, 128, 256, 512, 1024])
                }),
        handler(e) {
            let t,
                {
                    args: { type: n, id: o, format: s = 'png', size: u = 128 }
                } = e;
            if ('user' === n) {
                let e = r.default.getUser(o);
                if (null != e) {
                    t = i.ZP.getUserAvatarURL(e, !1, u, s);
                    let n = window.GLOBAL_ENV.CDN_HOST;
                    null != n && -1 !== t.indexOf(n) && (t += '&_=');
                } else throw new a.Z({ errorCode: c.lTL.INVALID_USER }, 'Invalid user id: '.concat(o));
            }
            if (null == t) throw new a.Z({ errorCode: c.lTL.INVALID_COMMAND }, 'No valid type.');
            return fetch(t)
                .then((e) => e.blob())
                .then((e) => (0, l.fD)(e))
                .then((e) => ({ data_url: e }));
        }
    }
};
