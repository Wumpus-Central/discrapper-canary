i.d(e, {
    default: () => j,
}),
    i(896048);
var l = i(627968),
    n = i(64700),
    a = i(311907),
    r = i(139033),
    d = i(397927),
    u = i(442433),
    s = i(820284),
    o = i(198982),
    c = i(50268),
    g = i(71393),
    h = i(627794),
    p = i(928348),
    b = i(137207),
    T = i(268749),
    f = i(264349),
    w = i(411335),
    x = i(652215),
    M = i(985018);

function j(t) {
    let { rule: e, analyticsContext: i, onSelect: j } = t,
        m = (0, h.wC)(e),
        A = (function (t) {
            let { editingRule: e, setEditingRule: i } = (0, T.U)();
            return (0, l.jsx)(d.Drp, {
                id: "edit-automod-rule",
                label: M.intl.string(M.t.uQq6Px),
                action: () => {
                    i(t);
                },
                disabled: null != e,
            });
        })(e),
        I = (function (t) {
            let { setEditingRule: e } = (0, T.U)(),
                [i, u] = n.useState(!1),
                { removeRule: s } = (0, p.wP)(t.guildId),
                c = (0, a.bG)([g.A], () => g.A.getGuild(t.guildId)),
                h = async () => {
                    if (!i && (await (0, f.ih)(t.name))) {
                        u(!0);
                        try {
                            await (0, b.nV)(t.id, t.guildId), e(null), s(t.id, t.guildId);
                        } catch (e) {
                            var l;
                            let t = new o.LG(e);
                            (0, d.showToast)(
                                (0, d.createToast)(
                                    null != (l = t.getAnyErrorMessage()) ? l : M.intl.string(M.t.fEptJP),
                                    d.ToastType.FAILURE,
                                ),
                            );
                        } finally {
                            u(!1);
                        }
                    }
                },
                j =
                    t.triggerType === w.uh.MENTION_SPAM &&
                    (null == c ? void 0 : c.features) != null &&
                    c.features.has(x.GuildFeatures.COMMUNITY);
            return (0, l.jsx)(d.Drp, {
                id: "delete-automod-rule",
                label: M.intl.string(M.t["92m/01"]),
                action: j
                    ? () => {
                          (0, r.A)({
                              title: M.intl.string(M.t.MmpqMC),
                              subtitle: M.intl.string(M.t.XMdBLw),
                          });
                      }
                    : h,
            });
        })(e),
        C = (0, c.A)({
            id: e.id,
            label: M.intl.string(M.t.F64hjn),
        });
    return (0, l.jsx)(s.A, {
        context: i,
        object: x.ZSU.CONTEXT_MENU,
        children: (0, l.jsxs)(d.W1t, {
            "data-menu-migrated-auto": !0,
            navId: "automod-rule-context",
            onClose: u.Z_,
            "aria-label": M.intl.string(M.t.uT36So),
            onSelect: j,
            children: [
                (0, l.jsxs)(d.rXV, {
                    children: [A, m && I],
                }),
                m &&
                    (0, l.jsx)(d.rXV, {
                        children: C,
                    }),
            ],
        }),
    });
}
