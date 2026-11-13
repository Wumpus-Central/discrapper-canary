var l = n(582128),
    r = n(855986),
    i = n(71393),
    a = n(576705),
    o = n(122393),
    u = n(233470),
    s = n(260498),
    c = n(951178),
    d = n(16619),
    f = n(722701),
    p = n(811587),
    h = n(826058),
    g = n(246338),
    y = n(652215),
    m = n(191850),
    x = n(792996);
function b(e) {
    let t = f.A.getPublishStatus(e)?.publishState;
    return null != t && (0, p.Uh)(t);
}
n.d(
    t,
    {},
    {
        A: function (e, t, n) {
            let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                p = (0, r.bG)([s.Ay], () => s.Ay.getProject(e), [e]),
                g = (0, r.bG)([s.Ay], () => s.Ay.getIntegrationStatus(e)?.preview_ready === !0, [e]),
                v = (0, d.z9)("ConjureShareToServer"),
                w = null != p && "user" === p.install_scope && (0, s.PV)(p),
                [j] = l.useState(() => (i && null != p ? (0, c.Jr)(p) : [])),
                k = (0, r.yK)([a.A], () => v.filter((e) => a.A.can(y.xBc.MANAGE_GUILD, e) && !j.includes(e.id)), [
                    v,
                    j,
                ]),
                [S, _] = l.useState(null),
                A = [S, p?.guild_id, t].map((e) => k.find((t) => t.id === e)).find((e) => null != e) ?? k[0] ?? null,
                [P, I] = l.useState(!1),
                [C, D] = l.useState(null),
                M = l.useCallback((e) => {
                    (_(e), D(null));
                }, []),
                E = l.useCallback(async () => {
                    let t = x.intl.string(m.default.qDjkvv);
                    if (null == A) return { shared: !1, error: t };
                    (I(!0), D(null));
                    let n = i ? null : (0, o.v)(e, 3e4);
                    try {
                        await (0, u.fh)(e, A.id);
                    } catch (r) {
                        n?.cancel();
                        let e = r?.body?.message,
                            l = "string" == typeof e ? e : t;
                        return (D(l), I(!1), { shared: !1, error: l });
                    }
                    if (null == n) return (I(!1), { shared: !0, next: "added" });
                    let l = s.Ay.getProject(e);
                    if (null != l && !(0, c._7)(l)) {
                        (n.cancel(), I(!1));
                        let t = f.A.getPublishStatus(e)?.publishState === "not_live";
                        return (
                            t ||
                                (function e(t, n) {
                                    setTimeout(() => {
                                        s.Ay.getIntegrationStatus(t)?.integration_installed !== !0 &&
                                            ((0, u.GO)(t), n > 1 && e(t, n - 1));
                                    }, 1500);
                                })(e, 6),
                            { shared: !0, next: t ? "publish" : "added" }
                        );
                    }
                    let r =
                        (await n.published) &&
                        (await (async function (e) {
                            let t = Date.now() + 5e3;
                            for (; !b(e) && Date.now() < t;) await new Promise((e) => setTimeout(e, 250));
                            return b(e);
                        })(e));
                    return (I(!1), { shared: !0, next: r ? "publish" : "await_test_app" });
                }, [i, A, e]),
                T = l.useCallback(async () => {
                    if (null != n && null != A)
                        try {
                            await (0, h.FZ)(e, "share", { platform: n.platform, guildId: A.id });
                        } catch {}
                }, [A, e, n]);
            return {
                available: w && g && k.length > 0,
                guilds: k,
                guild: A,
                pickGuild: M,
                sharing: P,
                error: C,
                share: E,
                publish: T,
            };
        },
        i: function (e, t, n) {
            let l = e.guild_ids;
            return (
                !!(0, s.PV)(e) &&
                null != t &&
                null != l &&
                !(l.length >= 10) &&
                Object.values(i.A.getGuilds()).some((e) => !l.includes(e.id) && (0, g.sM)(e, n))
            );
        },
    },
);
