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
    I = n(981631),
    l = n(388032),
    u = n(677095);
function N() {
    return (0, i.jsxs)(a.qXd, {
        color: a.DM8.DANGER,
        className: u.nagbar,
        children: [
            (0, i.jsx)(a.Text, {
                tag: 'span',
                color: 'always-white',
                variant: 'text-md/normal',
                children: l.NW.string(l.t['MG+Bzc'])
            }),
            (0, i.jsx)(a.u3T, {
                href: c.sQ.WARNING_SYSTEM_HELPCENTER_LINK,
                children: (0, i.jsx)(a.Text, {
                    variant: 'text-md/normal',
                    color: 'always-white',
                    children: l.NW.string(l.t['9JceHB'])
                })
            })
        ]
    });
}
function d(e) {
    let {} = e,
        t = (0, r.e7)([_.Z], () => _.Z.getAgeCheckStatus());
    return t === c.oE.NONE
        ? null
        : t === c.oE.SUCCESS
          ? (0, i.jsx)(a.Wn, {
                messageType: a.QYI.POSITIVE,
                children: l.NW.format(l.t.maZDLy, { login: '/login' })
            })
          : t === c.oE.ERROR
            ? (0, i.jsx)(a.Wn, {
                  messageType: a.QYI.ERROR,
                  children: l.NW.string(l.t['4sILBQ'])
              })
            : t === c.oE.FAILURE
              ? (0, i.jsx)(a.Wn, {
                    messageType: a.QYI.ERROR,
                    children: l.NW.string(l.t['40R63t'])
                })
              : (0, i.jsx)(a.Wn, {
                    messageType: a.QYI.INFO,
                    children: l.NW.string(l.t['nhhy/f'])
                });
}
function S() {
    return (0, i.jsxs)('div', {
        className: u.pageContainer,
        children: [(0, i.jsx)(d, {}), (0, i.jsx)(E.Z, {})]
    });
}
function L() {
    return (
        null == (0, r.e7)([o.default], () => o.default.getSuspendedUserToken()) && (0, s.uL)(I.Z5c.LOGIN),
        (0, i.jsxs)('div', {
            className: u.container,
            children: [(0, i.jsx)(N, {}), (0, i.jsx)(S, {})]
        })
    );
}
