i.d(e, { default: () => M }), i(47120);
var n = i(200651),
    l = i(192379),
    r = i(442837),
    d = i(481060),
    a = i(239091),
    s = i(410575),
    o = i(881052),
    u = i(299206),
    c = i(430824),
    h = i(236413),
    g = i(727072),
    x = i(36459),
    f = i(65912),
    m = i(572456),
    p = i(273504),
    T = i(981631),
    j = i(388032);
function M(t) {
    let { rule: e, analyticsContext: i, onSelect: M } = t,
        b = (0, h.Vb)(e),
        y = (function (t) {
            let { editingRule: e, setEditingRule: i } = (0, f.V)();
            return (0, n.jsx)(d.sNh, {
                id: 'edit-automod-rule',
                label: j.intl.string(j.t.uQq6Pz),
                action: () => {
                    i(t);
                },
                disabled: null != e
            });
        })(e),
        C = (function (t) {
            let { setEditingRule: e } = (0, f.V)(),
                [i, a] = l.useState(!1),
                { removeRule: s } = (0, g.pH)(t.guildId),
                u = (0, r.e7)([c.Z], () => c.Z.getGuild(t.guildId)),
                h = async () => {
                    if (!i && (await (0, m.gK)(t.name))) {
                        a(!0);
                        try {
                            await (0, x.mm)(t.id, t.guildId), e(null), s(t.id, t.guildId);
                        } catch (e) {
                            var n;
                            let t = new o.Hx(e);
                            (0, d.showToast)((0, d.createToast)(null !== (n = t.getAnyErrorMessage()) && void 0 !== n ? n : j.intl.string(j.t.fEptJC), d.ToastType.FAILURE));
                        } finally {
                            a(!1);
                        }
                    }
                },
                M = t.triggerType === p.fX.MENTION_SPAM && (null == u ? void 0 : u.features) != null && u.features.has(T.oNc.COMMUNITY);
            return (0, n.jsx)(d.sNh, {
                id: 'delete-automod-rule',
                label: j.intl.string(j.t['92m/09']),
                action: M
                    ? () => {
                          (0, d.h7j)((t) =>
                              (0, n.jsx)(d.ConfirmModal, {
                                  header: j.intl.string(j.t.MmpqMD),
                                  confirmText: j.intl.string(j.t.BddRzc),
                                  confirmButtonColor: d.zxk.Colors.BRAND,
                                  ...t,
                                  children: (0, n.jsx)(d.Text, {
                                      variant: 'text-md/normal',
                                      children: j.intl.string(j.t.XMdBLy)
                                  })
                              })
                          );
                      }
                    : h
            });
        })(e),
        N = (0, u.Z)({
            id: e.id,
            label: j.intl.string(j.t.F64hjo)
        });
    return (0, n.jsx)(s.Z, {
        context: i,
        object: T.qAy.CONTEXT_MENU,
        children: (0, n.jsxs)(d.v2r, {
            navId: 'automod-rule-context',
            onClose: a.Zy,
            'aria-label': j.intl.string(j.t.uT36Sk),
            onSelect: M,
            children: [
                (0, n.jsxs)(d.kSQ, {
                    children: [y, b && C]
                }),
                b && (0, n.jsx)(d.kSQ, { children: N })
            ]
        })
    });
}
