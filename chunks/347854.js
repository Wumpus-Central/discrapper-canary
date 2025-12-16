n.d(e, { k: () => C });
var i = n(755721),
    l = n(915009),
    s = n(509613),
    u = n(430824),
    r = n(626135),
    a = n(88658),
    o = n(976978),
    T = n(695346),
    S = n(313789),
    c = n(997950),
    E = n(87820),
    d = n(639814),
    g = n(922628),
    _ = n(703115),
    I = n(526761),
    N = n(981631),
    A = n(388032);
let O = (t, e) => {
        r.default.track(N.rMx.GUILD_DEFAULT_DMS_UPDATED, {
            default_guilds_restricted: t,
            applied_to_existing_guilds: e,
        });
    },
    C = (0, s.qs)(S.n.CONTENT_AND_SOCIAL_PERMISSIONS_DMS_SETTING, {
        useTitle: () => ((0, E.r)() ? A.intl.string(A.t.PMsfcH) : A.intl.string(A.t.RAQUSN)),
        useSubtitle: () => {
            let t = (0, d.is)(),
                e = (0, d.c_)(),
                n = (0, E.r)();
            return t === c.Th
                ? n
                    ? A.intl.string(A.t.XXGmuB)
                    : A.intl.string(A.t.wbYDfT)
                : e
                  ? A.intl.string(A.t.V0ka0Q)
                  : n
                    ? A.intl.string(A.t.F9WY3f)
                    : A.intl.string(A.t.G7c3Xo);
        },
        useValue: () => {
            let t = (0, d.is)(),
                e = T.h2.useSetting().includes(t),
                n = (0, o.q)();
            return t === c.Th ? !n : !e;
        },
        useDisabled: () => {
            let t = (0, l.LN)();
            return (0, d.is)() === c.Th && t;
        },
        setValue: (t) => {
            let e = c.xu.getState().selectedGuildId;
            if (e === c.Th) {
                var n;
                (n = !t),
                    (0, g.V)({
                        header: A.intl.string(A.t["uUr+GR"]),
                        body: A.intl.string(A.t.hjGJBp),
                        confirmText: A.intl.string(A.t.gm1Vej),
                        cancelText: A.intl.string(A.t.p89ACt),
                        confirmButtonColor: i.zx.Colors.BRAND,
                        onConfirm: () => {
                            T.gR.updateSetting(n), O(n, !1);
                        },
                        onCancel: () => {
                            T.gR.updateSetting(n), T.h2.updateSetting(n ? u.Z.getGuildIds() : []), O(n, !0);
                        },
                    });
            } else {
                let n = (0, a.YK)();
                t ? n.delete(e) : n.add(e),
                    T.h2.updateSetting(Array.from(n)),
                    r.default.track(N.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: _.Y.DIRECT_MESSAGES_TOGGLE,
                        ingress: I.f4.USER_SETTINGS_PRIVACY_SAFETY,
                        guild_id: e,
                    });
            }
        },
    });
