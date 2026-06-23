i.d(e, { default: () => E });
var n = i(627968),
    l = i(64700),
    r = i(17928),
    u = i(139033),
    a = i(477782),
    d = i(691540),
    s = i(857250),
    o = i(97483),
    c = i(980707),
    g = i(442433),
    h = i(820284),
    f = i(913122),
    b = i(50268),
    p = i(71393),
    x = i(627794),
    M = i(928348),
    j = i(995786),
    m = i(268749),
    w = i(264349),
    A = i(243277),
    C = i(652215),
    I = i(375708);
function E(t) {
    let { rule: e, analyticsContext: i, onSelect: E } = t,
        T = (0, x.wC)(e),
        U = (function (t) {
            let { editingRule: e, setEditingRule: i } = (0, m.U)();
            return (0, n.jsx)(a.Dr, {
                id: "edit-automod-rule",
                label: I.intl.string(I.t.uQq6Px),
                action: function () {
                    i(t);
                },
                disabled: null != e,
            });
        })(e),
        k = (function (t) {
            let { setEditingRule: e } = (0, m.U)(),
                [i, c] = l.useState(!1),
                { removeRule: g } = (0, M.wP)(t.guildId),
                h = (0, r.bG)([p.A], () => p.A.getGuild(t.guildId));
            async function b() {
                if (!i && (await (0, w.ih)(t.name))) {
                    c(!0);
                    try {
                        await (0, j.nV)(t.id, t.guildId), e(null), g(t.id, t.guildId);
                    } catch (e) {
                        let t = new f.LG(e);
                        (0, d.P0)((0, s.o)(t.getAnyErrorMessage() ?? I.intl.string(I.t.fEptJP), o.Ck.FAILURE));
                    } finally {
                        c(!1);
                    }
                }
            }
            let x =
                t.triggerType === A.uh.MENTION_SPAM && h?.features != null && h.features.has(C.GuildFeatures.COMMUNITY);
            return (0, n.jsx)(a.Dr, {
                id: "delete-automod-rule",
                label: I.intl.string(I.t["92m/01"]),
                action: x
                    ? function () {
                          (0, u.A)({ title: I.intl.string(I.t.MmpqMC), subtitle: I.intl.string(I.t.XMdBLw) });
                      }
                    : b,
            });
        })(e),
        y = (0, b.A)({ id: e.id, label: I.intl.string(I.t.F64hjn) });
    return (0, n.jsx)(h.A, {
        context: i,
        object: C.ZSU.CONTEXT_MENU,
        children: (0, n.jsxs)(c.W, {
            "data-menu-migrated-auto": !0,
            navId: "automod-rule-context",
            onClose: g.Z_,
            "aria-label": I.intl.string(I.t.uT36So),
            onSelect: E,
            children: [(0, n.jsxs)(a.rX, { children: [U, T && k] }), T && (0, n.jsx)(a.rX, { children: y })],
        }),
    });
}
