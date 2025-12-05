i.d(e, { default: () => m }), i(388685);
var l = i(54381),
    n = i(473749),
    s = i(442837),
    a = i(885387),
    r = i(481060),
    d = i(239091),
    u = i(410575),
    o = i(881052),
    c = i(299206),
    g = i(430824),
    h = i(236413),
    p = i(727072),
    f = i(36459),
    b = i(65912),
    x = i(572456),
    T = i(273504),
    M = i(981631),
    j = i(388032);
function m(t) {
    let { rule: e, analyticsContext: i, onSelect: m } = t,
        y = (0, h.Vb)(e),
        I = (function (t) {
            let { editingRule: e, setEditingRule: i } = (0, b.V)();
            return (0, l.jsx)(r.sNh, {
                id: "edit-automod-rule",
                label: j.intl.string(j.t.uQq6Px),
                action: () => {
                    i(t);
                },
                disabled: null != e,
            });
        })(e),
        w = (function (t) {
            let { setEditingRule: e } = (0, b.V)(),
                [i, d] = n.useState(!1),
                { removeRule: u } = (0, p.pH)(t.guildId),
                c = (0, s.e7)([g.Z], () => g.Z.getGuild(t.guildId)),
                h = async () => {
                    if (!i && (await (0, x.gK)(t.name))) {
                        d(!0);
                        try {
                            await (0, f.mm)(t.id, t.guildId), e(null), u(t.id, t.guildId);
                        } catch (e) {
                            var l;
                            let t = new o.Hx(e);
                            (0, r.showToast)(
                                (0, r.createToast)(
                                    null != (l = t.getAnyErrorMessage()) ? l : j.intl.string(j.t.fEptJP),
                                    r.ToastType.FAILURE,
                                ),
                            );
                        } finally {
                            d(!1);
                        }
                    }
                },
                m =
                    t.triggerType === T.fX.MENTION_SPAM &&
                    (null == c ? void 0 : c.features) != null &&
                    c.features.has(M.GuildFeatures.COMMUNITY);
            return (0, l.jsx)(r.sNh, {
                id: "delete-automod-rule",
                label: j.intl.string(j.t["92m/01"]),
                action: m
                    ? () => {
                          (0, a.Z)({
                              title: j.intl.string(j.t.MmpqMC),
                              subtitle: j.intl.string(j.t.XMdBLw),
                          });
                      }
                    : h,
            });
        })(e),
        N = (0, c.Z)({
            id: e.id,
            label: j.intl.string(j.t.F64hjn),
        });
    return (0, l.jsx)(u.Z, {
        context: i,
        object: M.qAy.CONTEXT_MENU,
        children: (0, l.jsxs)(r.v2r, {
            navId: "automod-rule-context",
            onClose: d.Zy,
            "aria-label": j.intl.string(j.t.uT36So),
            onSelect: m,
            children: [
                (0, l.jsxs)(r.kSQ, {
                    children: [I, y && w],
                }),
                y && (0, l.jsx)(r.kSQ, { children: N }),
            ],
        }),
    });
}
