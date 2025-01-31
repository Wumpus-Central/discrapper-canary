t.d(i, { ForwardFailedAlertModal: () => F });
var n = t(200651),
    a = t(192379),
    l = t(442837),
    s = t(481060),
    r = t(700582),
    d = t(933557),
    c = t(266076),
    o = t(810123),
    u = t(592125),
    I = t(430824),
    _ = t(158776),
    E = t(699516),
    A = t(594174),
    S = t(51144),
    g = t(912332),
    h = t(388032),
    f = t(917858);
function L(e) {
    let { icon: i, label: t } = e;
    return (0, n.jsxs)('div', {
        className: f.failedRow,
        children: [
            i,
            (0, n.jsx)(s.Text, {
                className: f.label,
                variant: 'text-md/medium',
                lineClamp: 1,
                children: t
            })
        ]
    });
}
function p(e) {
    let { channel: i } = e,
        t = (0, d.ZP)(i);
    return (0, n.jsx)(L, {
        icon: (0, n.jsx)(c.Z, {
            'aria-hidden': !0,
            size: s.EFr.SIZE_32,
            channel: i,
            experimentLocation: 'forward-failed-retry-modal'
        }),
        label: t
    });
}
function N(e) {
    let { user: i } = e,
        t = S.ZP.useName(i),
        a = (0, l.e7)([E.Z], () => E.Z.getNickname(i.id)),
        d = (0, l.e7)([_.Z], () => _.Z.getStatus(i.id));
    return (0, n.jsx)(L, {
        icon: (0, n.jsx)(r.Z, {
            'aria-hidden': !0,
            size: s.EFr.SIZE_32,
            user: i,
            status: d
        }),
        label: null != a ? a : t
    });
}
function b(e) {
    let { channel: i } = e,
        t = (0, l.e7)([I.Z], () => I.Z.getGuild(null == i ? void 0 : i.guild_id)),
        a = (0, d.ZP)(i);
    return (0, n.jsx)(L, {
        icon: (0, n.jsx)(o.Z, {
            size: o.E.SMALL_32,
            guild: t,
            channel: i
        }),
        label: a
    });
}
function x(e) {
    let { destination: i } = e,
        { channel: t, user: a } = (0, l.cj)([u.Z, A.default], () => ({
            channel: 'channel' === i.type ? u.Z.getChannel(i.id) : null,
            user: 'user' === i.type ? A.default.getUser(i.id) : null
        }));
    return (null == t ? void 0 : t.isGroupDM()) ? (0, n.jsx)(p, { channel: t }) : null != a ? (0, n.jsx)(N, { user: a }) : null != t ? (0, n.jsx)(b, { channel: t }) : null;
}
function F(e) {
    let { message: i, failedDestinations: t, forwardOptions: l, ...r } = e,
        d = a.useCallback(() => {
            (0, g.l8)({
                message: i,
                source: 'retry-modal',
                initialSelectedDestinations: t,
                forwardOptions: l
            });
        }, [t, i, l]);
    return (0, n.jsxs)(s.ConfirmModal, {
        header: h.intl.string(h.t['/OPIaG']),
        confirmText: h.intl.string(h.t['5911LS']),
        cancelText: h.intl.string(h.t['ETE/oK']),
        confirmButtonColor: s.zxk.Colors.BRAND,
        onConfirm: d,
        ...r,
        children: [
            (0, n.jsx)(s.Text, {
                variant: 'text-md/medium',
                children: h.intl.format(h.t.cn9vFR, { count: t.length })
            }),
            (0, n.jsx)('div', {
                className: f.failedDestinations,
                children: t.map((e, i) => (0, n.jsx)(x, { destination: e }, i))
            })
        ]
    });
}
