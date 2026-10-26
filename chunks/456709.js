n.d(t, { A: () => c });
var l = n(582128),
    r = n(17928),
    o = n(11044),
    a = n(287809),
    s = n(503275),
    u = n(97005),
    i = n(371169),
    d = n(260498);
function c(e, t, n) {
    let {
            project: c,
            remixProject: v,
            isSettled: f,
        } = (function (e, t, n) {
            let o = (0, u.m0)({ guildId: t ?? void 0, location: "ConjureAppHoverCard" }) && null != t;
            l.useEffect(() => {
                n && null != e && (0, i.tF)([e]);
            }, [n, e]);
            let { project: a, isUnavailable: s } = (0, r.cf)(
                [d.Ay],
                () => ({
                    project: null != e ? (d.Ay.getProject(e) ?? null) : null,
                    isUnavailable: null != e && (0, i.su)(e),
                }),
                [e],
            );
            return l.useMemo(
                () => ({
                    project: a,
                    remixProject: o && null != a && (0, d.H_)(a) ? a : null,
                    isSettled: null == e || null != a || s,
                }),
                [a, o, e, s],
            );
        })(e?.conjureProjectId ?? null, t, n),
        m = c?.owner_user_id ?? null,
        [g, p] = l.useState(null);
    l.useEffect(() => {
        if (!n || null == m) return;
        let e = !0;
        return (
            (async function (t) {
                (await (0, s.Y_)(t), e && null == a.default.getUser(t) && p(t));
            })(m),
            () => {
                e = !1;
            }
        );
    }, [n, m]);
    let x = (0, r.bG)([a.default], () => (null != m ? (a.default.getUser(m) ?? null) : null), [m]),
        h = x?.getAvatarURL(t, 32);
    return (
        l.useEffect(() => {
            n && null != h && (0, o.N)(h);
        }, [n, h]),
        l.useMemo(
            () => ({ creator: x, remixProject: v, isSettled: null != e && f && (null == m || null != x || g === m) }),
            [x, v, e, f, m, g],
        )
    );
}
