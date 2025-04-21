n.r(t), n.d(t, { default: () => L });
var i = n(200651);
n(192379);
var r = n(442837),
    a = n(481060),
    s = n(703656),
    o = n(314897),
    _ = n(236289),
    E = n(518560),
    c = n(800530),
    l = n(981631),
    I = n(388032),
    u = n(677095);
function d() {
    return (0, i.jsxs)(a.qXd, {
        color: a.DM8.DANGER,
        className: u.nagbar,
        children: [
            (0, i.jsx)(a.Text, {
                tag: 'span',
                color: 'always-white',
                variant: 'text-md/normal',
                children: I.intl.string(I.t['MG+Bzc'])
            }),
            (0, i.jsx)(a.u3T, {
                href: c.sQ.WARNING_SYSTEM_HELPCENTER_LINK,
                children: (0, i.jsx)(a.Text, {
                    variant: 'text-md/normal',
                    color: 'always-white',
                    children: I.intl.string(I.t['9JceHB'])
                })
            })
        ]
    });
}
function S(e) {
    let {} = e,
        t = (0, r.e7)([_.Z], () => _.Z.getAgeCheckStatus());
    return t === c.oE.NONE
        ? null
        : t === c.oE.SUCCESS
          ? (0, i.jsx)(a.Wn, {
                messageType: a.QYI.POSITIVE,
                children: I.intl.format(I.t.maZDLy, { login: '/login' })
            })
          : t === c.oE.ERROR
            ? (0, i.jsx)(a.Wn, {
                  messageType: a.QYI.ERROR,
                  children: I.intl.string(I.t['4sILBQ'])
              })
            : t === c.oE.FAILURE
              ? (0, i.jsx)(a.Wn, {
                    messageType: a.QYI.ERROR,
                    children: I.intl.string(I.t['40R63t'])
                })
              : (0, i.jsx)(a.Wn, {
                    messageType: a.QYI.INFO,
                    children: I.intl.string(I.t['nhhy/f'])
                });
}
function N() {
    return (0, i.jsxs)('div', {
        className: u.pageContainer,
        children: [(0, i.jsx)(S, {}), (0, i.jsx)(E.Z, {})]
    });
}
function L() {
    return (
        null == (0, r.e7)([o.default], () => o.default.getSuspendedUserToken()) && (0, s.uL)(l.Z5c.LOGIN, { source: 'suspended_user_safety_hub_page' }),
        (0, i.jsxs)('div', {
            className: u.container,
            children: [(0, i.jsx)(d, {}), (0, i.jsx)(N, {})]
        })
    );
}
