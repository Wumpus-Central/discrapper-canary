i.r(t),
    i.d(t, {
        FailedChannelRow: function () {
            return b;
        },
        FailedGroupDMRow: function () {
            return L;
        },
        FailedUserRow: function () {
            return N;
        },
        ForwardFailedAlertModal: function () {
            return m;
        }
    });
var a = i(200651),
    n = i(192379),
    l = i(442837),
    s = i(481060),
    r = i(700582),
    c = i(933557),
    d = i(266076),
    o = i(810123),
    u = i(592125),
    A = i(430824),
    I = i(158776),
    S = i(699516),
    _ = i(594174),
    E = i(51144),
    f = i(912332),
    h = i(388032),
    g = i(917858);
function p(e) {
    let { icon: t, label: i } = e;
    return (0, a.jsxs)('div', {
        className: g.failedRow,
        children: [
            t,
            (0, a.jsx)(s.Text, {
                className: g.label,
                variant: 'text-md/medium',
                lineClamp: 1,
                children: i
            })
        ]
    });
}
function L(e) {
    let { channel: t } = e,
        i = (0, c.ZP)(t);
    return (0, a.jsx)(p, {
        icon: (0, a.jsx)(d.Z, {
            'aria-hidden': !0,
            size: s.AvatarSizes.SIZE_32,
            channel: t,
            experimentLocation: 'forward-failed-retry-modal'
        }),
        label: i
    });
}
function N(e) {
    let { user: t } = e,
        i = E.ZP.useName(t),
        n = (0, l.e7)([S.Z], () => S.Z.getNickname(t.id)),
        c = (0, l.e7)([I.Z], () => I.Z.getStatus(t.id));
    return (0, a.jsx)(p, {
        icon: (0, a.jsx)(r.Z, {
            'aria-hidden': !0,
            size: s.AvatarSizes.SIZE_32,
            user: t,
            status: c
        }),
        label: null != n ? n : i
    });
}
function b(e) {
    let { channel: t } = e,
        i = (0, l.e7)([A.Z], () => A.Z.getGuild(null == t ? void 0 : t.guild_id)),
        n = (0, c.ZP)(t);
    return (0, a.jsx)(p, {
        icon: (0, a.jsx)(o.Z, {
            size: o.E.SMALL_32,
            guild: i,
            channel: t
        }),
        label: n
    });
}
function x(e) {
    let { destination: t } = e,
        { channel: i, user: n } = (0, l.cj)([u.Z, _.default], () => ({
            channel: 'channel' === t.type ? u.Z.getChannel(t.id) : null,
            user: 'user' === t.type ? _.default.getUser(t.id) : null
        }));
    if (null == i ? void 0 : i.isGroupDM()) return (0, a.jsx)(L, { channel: i });
    if (null != n) return (0, a.jsx)(N, { user: n });
    if (null != i) return (0, a.jsx)(b, { channel: i });
    return null;
}
function m(e) {
    let { message: t, failedDestinations: i, forwardOptions: l, ...r } = e,
        c = n.useCallback(() => {
            (0, f.l8)({
                message: t,
                source: 'retry-modal',
                initialSelectedDestinations: i,
                forwardOptions: l
            });
        }, [i, t, l]);
    return (0, a.jsxs)(s.ConfirmModal, {
        header: h.intl.string(h.t['/OPIaG']),
        confirmText: h.intl.string(h.t['5911LS']),
        cancelText: h.intl.string(h.t['ETE/oK']),
        confirmButtonColor: s.Button.Colors.BRAND,
        onConfirm: c,
        ...r,
        children: [
            (0, a.jsx)(s.Text, {
                variant: 'text-md/medium',
                children: h.intl.format(h.t.cn9vFR, { count: i.length })
            }),
            (0, a.jsx)('div', {
                className: g.failedDestinations,
                children: i.map((e, t) => (0, a.jsx)(x, { destination: e }, t))
            })
        ]
    });
}
