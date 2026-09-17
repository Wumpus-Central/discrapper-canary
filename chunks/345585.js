n.d(i, { default: () => k });
var e = n(477900),
    l = n(582128),
    r = n(139033),
    d = n(477782),
    a = n(691540),
    u = n(857250),
    s = n(97483),
    o = n(980707),
    c = n(442433),
    g = n(820284),
    h = n(913122),
    f = n(50268),
    p = n(627794),
    x = n(928348),
    b = n(995786),
    j = n(364806),
    m = n(979816),
    w = n(264349),
    C = n(652215),
    I = n(375708);
function k(t) {
    let { rule: i, analyticsContext: n, onSelect: k } = t,
        y = (0, p.wC)(i),
        A = (function (t) {
            let { editingRule: i, setEditingRule: n } = (0, j.U)();
            return (0, e.jsx)(d.Dr, {
                id: "edit-automod-rule",
                label: I.intl.string(I.t.uQq6Px),
                action: function () {
                    n(t);
                },
                disabled: null != i,
            });
        })(i),
        E = (function (t) {
            let { setEditingRule: i } = (0, j.U)(),
                [n, o] = l.useState(!1),
                { removeRule: c } = (0, x.wP)(t.guildId),
                g = (0, m._x)(t.guildId, t.triggerType);
            async function f() {
                if (!n && (await (0, w.ih)(t.name))) {
                    o(!0);
                    try {
                        (await (0, b.nV)(t.id, t.guildId), i(null), c(t.id, t.guildId));
                    } catch (i) {
                        let t = new h.LG(i);
                        (0, a.P0)((0, u.o)(t.getAnyErrorMessage() ?? I.intl.string(I.t.fEptJP), s.Ck.FAILURE));
                    } finally {
                        o(!1);
                    }
                }
            }
            return (0, e.jsx)(d.Dr, {
                id: "delete-automod-rule",
                label: I.intl.string(I.t["92m/01"]),
                action: g
                    ? function () {
                          (0, r.A)({ title: I.intl.string(I.t.MmpqMC), subtitle: I.intl.string(I.t.XMdBLw) });
                      }
                    : f,
            });
        })(i),
        M = (0, f.A)({ id: i.id, label: I.intl.string(I.t.F64hjn) });
    return (0, e.jsx)(g.A, {
        context: n,
        object: C.ZSU.CONTEXT_MENU,
        children: (0, e.jsxs)(o.W, {
            "data-menu-migrated-auto": !0,
            navId: "automod-rule-context",
            onClose: c.Z_,
            "aria-label": I.intl.string(I.t.uT36So),
            onSelect: k,
            children: [(0, e.jsxs)(d.rX, { children: [A, y && E] }), y && (0, e.jsx)(d.rX, { children: M })],
        }),
    });
}
