i.d(e, { default: () => j }), i(896048);
var l = i(627968),
    n = i(64700),
    r = i(311907),
    a = i(139033),
    s = i(397927),
    d = i(442433),
    u = i(820284),
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
        A = (0, h.wC)(e),
        I = (function (t) {
            let { editingRule: e, setEditingRule: i } = (0, T.U)();
            return (0, l.jsx)(s.Drp, {
                id: "edit-automod-rule",
                label: M.intl.string(M.t.uQq6Px),
                action: () => {
                    i(t);
                },
                disabled: null != e,
            });
        })(e),
        C = (function (t) {
            let { setEditingRule: e } = (0, T.U)(),
                [i, d] = n.useState(!1),
                { removeRule: u } = (0, p.wP)(t.guildId),
                c = (0, r.bG)([g.A], () => g.A.getGuild(t.guildId)),
                h = async () => {
                    if (!i && (await (0, f.ih)(t.name))) {
                        d(!0);
                        try {
                            await (0, b.nV)(t.id, t.guildId), e(null), u(t.id, t.guildId);
                        } catch (e) {
                            var l;
                            let t = new o.LG(e);
                            (0, s.showToast)(
                                (0, s.createToast)(
                                    null != (l = t.getAnyErrorMessage()) ? l : M.intl.string(M.t.fEptJP),
                                    s.ToastType.FAILURE,
                                ),
                            );
                        } finally {
                            d(!1);
                        }
                    }
                },
                j =
                    t.triggerType === w.uh.MENTION_SPAM &&
                    (null == c ? void 0 : c.features) != null &&
                    c.features.has(x.GuildFeatures.COMMUNITY);
            return (0, l.jsx)(s.Drp, {
                id: "delete-automod-rule",
                label: M.intl.string(M.t["92m/01"]),
                action: j
                    ? () => {
                          (0, a.A)({
                              title: M.intl.string(M.t.MmpqMC),
                              subtitle: M.intl.string(M.t.XMdBLw),
                          });
                      }
                    : h,
            });
        })(e),
        m = (0, c.A)({
            id: e.id,
            label: M.intl.string(M.t.F64hjn),
        });
    return (0, l.jsx)(u.A, {
        context: i,
        object: x.ZSU.CONTEXT_MENU,
        children: (0, l.jsxs)(s.W1t, {
            navId: "automod-rule-context",
            onClose: d.Z_,
            "aria-label": M.intl.string(M.t.uT36So),
            onSelect: j,
            children: [
                (0, l.jsxs)(s.rXV, {
                    children: [I, A && C],
                }),
                A && (0, l.jsx)(s.rXV, { children: m }),
            ],
        }),
    });
}
