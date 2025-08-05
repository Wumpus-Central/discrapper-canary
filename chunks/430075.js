(n.r(t), n.d(t, { default: () => h }));
var a = n(255367);
n(73800);
var i = n(442837),
    r = n(481060),
    s = n(703656),
    o = n(314897),
    d = n(236289),
    c = n(518560),
    u = n(800530),
    l = n(981631),
    f = n(388032),
    p = n(677095);
function _() {
    return (0, a.jsxs)(r.qXd, {
        color: r.DM8.DANGER,
        className: p.nagbar,
        children: [
            (0, a.jsx)(r.Text, {
                tag: 'span',
                color: 'always-white',
                variant: 'text-md/normal',
                children: f.intl.string(f.t['MG+Bzc'])
            }),
            (0, a.jsx)(r.u3T, {
                href: u.sQ.WARNING_SYSTEM_HELPCENTER_LINK,
                children: (0, a.jsx)(r.Text, {
                    variant: 'text-md/normal',
                    color: 'always-white',
                    children: f.intl.string(f.t['9JceHB'])
                })
            })
        ]
    });
}
function m(e) {
    let {} = e,
        t = (0, i.e7)([d.Z], () => d.Z.getAgeCheckStatus());
    return t === u.oE.NONE
        ? null
        : t === u.oE.SUCCESS
          ? (0, a.jsx)(r.Wn, {
                messageType: r.QYI.POSITIVE,
                children: f.intl.format(f.t.maZDLy, { login: '/login' })
            })
          : t === u.oE.ERROR
            ? (0, a.jsx)(r.Wn, {
                  messageType: r.QYI.ERROR,
                  children: f.intl.string(f.t['4sILBQ'])
              })
            : t === u.oE.FAILURE
              ? (0, a.jsx)(r.Wn, {
                    messageType: r.QYI.ERROR,
                    children: f.intl.string(f.t['40R63t'])
                })
              : (0, a.jsx)(r.Wn, {
                    messageType: r.QYI.INFO,
                    children: f.intl.string(f.t['nhhy/f'])
                });
}
function g() {
    return (0, a.jsxs)('div', {
        className: p.pageContainer,
        children: [(0, a.jsx)(m, {}), (0, a.jsx)(c.Z, {})]
    });
}
function h() {
    return (
        null == (0, i.e7)([o.default], () => o.default.getSuspendedUserToken()) && (0, s.uL)(l.Z5c.LOGIN, { source: 'suspended_user_safety_hub_page' }),
        (0, a.jsxs)('div', {
            className: p.container,
            children: [(0, a.jsx)(_, {}), (0, a.jsx)(g, {})]
        })
    );
}
