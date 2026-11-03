t.d(n, { A: () => c });
var l = t(582128),
    r = t(17928),
    o = t(11044),
    a = t(287809),
    u = t(503275),
    s = t(97005),
    d = t(371169),
    i = t(260498);
function c(e, n, t) {
    let {
            project: c,
            remixProject: v,
            isSettled: m,
        } = (function (e, n, t) {
            let o = (0, s.m0)({ guildId: n ?? void 0, location: "ConjureAppHoverCard" }) && null != n;
            l.useEffect(() => {
                t && null != e && (0, d.tF)([e]);
            }, [t, e]);
            let { project: a, isUnavailable: u } = (0, r.cf)(
                [i.Ay],
                () => ({
                    project: null != e ? (i.Ay.getProject(e) ?? null) : null,
                    isUnavailable: null != e && (0, d.su)(e),
                }),
                [e],
            );
            return l.useMemo(
                () => ({
                    project: a,
                    remixProject: o && null != a && (0, i.H_)(a) ? a : null,
                    isSettled: null == e || null != a || u,
                }),
                [a, o, e, u],
            );
        })(e?.conjureProjectId ?? null, n, t),
        f = c?.owner_user_id ?? null,
        [g, p] = l.useState(null);
    l.useEffect(() => {
        if (!t || null == f) return;
        let e = !0;
        return (
            (async function (n) {
                (await (0, u.Y_)(n), e && null == a.default.getUser(n) && p(n));
            })(f),
            () => {
                e = !1;
            }
        );
    }, [t, f]);
    let j = (0, r.bG)([a.default], () => (null != f ? (a.default.getUser(f) ?? null) : null), [f]),
        x = j?.getAvatarURL(n, 32);
    return (
        l.useEffect(() => {
            t && null != x && (0, o.N)(x);
        }, [t, x]),
        l.useMemo(
            () => ({ creator: j, remixProject: v, isSettled: null != e && m && (null == f || null != j || g === f) }),
            [j, v, e, m, f, g],
        )
    );
}
