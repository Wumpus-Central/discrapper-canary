(e.d(n, { A: () => L }), e(321073));
var t = e(477900),
    i = e(582128),
    c = e(17928),
    o = e(477782),
    u = e(22231),
    r = e(625903),
    d = e(624479),
    a = e(70688),
    s = e(91242),
    A = e(457827),
    p = e(574172),
    g = e(869146),
    I = e(976860),
    y = e(808728),
    f = e(576705),
    _ = e(712808),
    h = e(260498),
    b = e(95264),
    x = e(616334),
    C = e(246338),
    E = e(696451),
    D = e(71393),
    G = e(935208),
    N = e(164892),
    V = e(371169),
    j = e(652215),
    P = e(746080),
    T = e(165610),
    v = e(248675),
    B = e(660183);
function L(l, n, e) {
    var L;
    let M,
        F,
        H,
        S,
        m,
        O = (0, C.w$)(l, e),
        k =
            ((L = O ? l : null),
            (F = null != (M = (0, C.us)(L))),
            (H = L?.guild_id ?? null),
            (S = (0, c.bG)(
                [D.A, f.A],
                () => {
                    let l = null != H ? D.A.getGuild(H) : null;
                    return null != l && f.A.can(j.xBc.MANAGE_GUILD, l);
                },
                [H],
            )),
            (m = (0, c.yK)([E.Ay], () => (null != H ? (E.Ay.getSelfMember(H)?.roles ?? []) : []), [H])),
            i.useEffect(() => {
                F && null != M && (0, V.hF)(H ?? void 0);
            }, [F, M, H, S, m]),
            (0, c.bG)(
                [h.Ay],
                () => {
                    if (null == M) return null;
                    let l = h.Ay.findProjectByApplicationId(M);
                    if (null == l || (0, h.PV)(l)) return l;
                    let n = null != H ? G.default.castGuildIdAsEveryoneGuildRoleId(H) : null,
                        e = (l.collaborator_role_ids ?? []).some((l) => l === n || m.includes(l));
                    return l.guild_id === H && (0, N.Hn)(l) && (S || e) ? l : null;
                },
                [M, S, m, H],
            )),
        w = k?.id ?? null,
        U = l.guild_id ?? null;
    i.useEffect(() => {
        null != w && (0, _.Hc)(w);
    }, [w]);
    let R = (0, c.bG)([_.Ay], () => null != w && null != _.Ay.getSettings(w), [w]),
        K = n?.id,
        X = i.useCallback(() => {
            (null != K &&
                g.A.getWindowOpen(j.MLl.ACTIVITY_POPOUT) &&
                s.A.getMainFrame()?.id === K &&
                (0, p.close)(j.MLl.ACTIVITY_POPOUT),
                (0, A.r)(K),
                (0, I.pX)(
                    (function (l, n) {
                        if (null == l) return j.BVt.FRIENDS;
                        let e = y.Ay.getDefaultChannel(l);
                        if (null != e && e.id !== n) return j.BVt.CHANNEL(l, e.id);
                        let t = y.Ay.getFirstChannel(l, (l) => {
                            let { channel: e } = l;
                            return e.id !== n && f.A.can(j.xBc.VIEW_CHANNEL, e);
                        });
                        return null != t ? j.BVt.CHANNEL(l, t.id) : j.BVt.FRIENDS;
                    })(U, l.id),
                ));
        }, [K, U, l.id]);
    if (!O || null == k || null == U) return [];
    let W = [
        (0, t.jsx)(
            o.Dr,
            {
                id: "conjure-edit",
                icon: u.PencilIcon,
                leadingAccessory: { type: "icon", icon: u.PencilIcon },
                label: B.intl.string(v.default.jMMrDM),
                action: () => (0, I.pX)(j.BVt.CHANNEL(U, P.VV.CONJURE, k.id)),
            },
            "edit",
        ),
    ];
    return (
        (R || (0, h.PV)(k)) &&
            W.push(
                (0, t.jsx)(
                    o.Dr,
                    {
                        id: "conjure-settings",
                        icon: r.SettingsIcon,
                        leadingAccessory: { type: "icon", icon: r.SettingsIcon },
                        label: B.intl.string(v.default.I2XSKe),
                        action: () => (0, x.A)(k.id, { guildId: U, initialTab: "app" }),
                    },
                    "settings",
                ),
            ),
        (0, h.H_)(k) &&
            W.push(
                (0, t.jsx)(
                    o.Dr,
                    {
                        id: "conjure-remix",
                        icon: d.CopyIcon,
                        leadingAccessory: { type: "icon", icon: d.CopyIcon },
                        label: B.intl.string(v.default["9wQTdG"]),
                        action: () => (0, b.A)(k, U),
                    },
                    "remix",
                ),
            ),
        (0, T.x1)(n) &&
            W.push(
                (0, t.jsx)(
                    o.Dr,
                    {
                        id: "conjure-close",
                        icon: a.DoorExitIcon,
                        leadingAccessory: { type: "icon", icon: a.DoorExitIcon },
                        label: B.intl.string(v.default["/TlGcK"]),
                        action: X,
                    },
                    "close",
                ),
            ),
        W
    );
}
