n.d(t, { A: () => u });
var i = n(287809),
    r = n(486020),
    a = n(515718),
    l = n(636401),
    s = n(629471),
    o = n(613057),
    d = n(652215);
let u = {
    [d.e$_.GET_IMAGE]: {
        scope: o.hj,
        validation: (e) =>
            (0, s.A)(e)
                .required()
                .keys({
                    type: e.string().required().valid(["user"]),
                    id: e.string().required(),
                    format: e.string().required().valid(["png", "webp", "jpg"]),
                    size: e.number().required().valid([16, 32, 64, 128, 256, 512, 1024]),
                }),
        handler(e) {
            let t,
                {
                    args: { type: n, id: s, format: o = "png", size: u = 128 },
                } = e;
            if ("user" === n) {
                let e = i.default.getUser(s);
                if (null != e) {
                    t = r.Ay.getUserAvatarURL(e, !1, u, o);
                    let n = window.GLOBAL_ENV.CDN_HOST;
                    null != n && -1 !== t.indexOf(n) && (t += "&_=");
                } else throw new l.A({ errorCode: d.Lw6.INVALID_USER }, `Invalid user id: ${s}`);
            }
            if (null == t) throw new l.A({ errorCode: d.Lw6.INVALID_COMMAND }, "No valid type.");
            return fetch(t)
                .then((e) => e.blob())
                .then((e) => (0, a.We)(e))
                .then((e) => ({ data_url: e }));
        },
    },
};
