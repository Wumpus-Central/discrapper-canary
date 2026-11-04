var i = n(778858),
    l = n(463347),
    r = n(46653),
    s = n(71393);
let a = new Map();
n.d(
    t,
    {},
    {
        A: function (e) {
            if (null != s.A.getGuild(e)) return Promise.resolve(!0);
            let t = r.default.getSessionId();
            if (!(0, l.nn)(e) || null == t) return Promise.resolve(!1);
            let n = `${t}:${e}`,
                o = a.get(n);
            return (
                null == o &&
                    ((o = (async function (e, t) {
                        try {
                            let t = await i.A.joinGuild(e, { lurker: !0, autoNavigate: !1 });
                            if (!0 === t.body.show_verification_form) return !1;
                            return (await (0, i.k)(e), !0);
                        } catch {
                            return !1;
                        } finally {
                            a.delete(t);
                        }
                    })(e, n)),
                    a.set(n, o)),
                o
            );
        },
    },
);
