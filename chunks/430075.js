n.r(t),
    n.d(t, {
        default: function () {
            return T;
        }
    });
var i = n(200651);
n(192379);
var E = n(442837),
    r = n(481060),
    _ = n(703656),
    I = n(314897),
    o = n(236289),
    s = n(518560),
    a = n(800530),
    S = n(981631),
    c = n(388032),
    N = n(33869);
function u() {
    return (0, i.jsxs)(r.Notice, {
        color: r.NoticeColors.DANGER,
        className: N.nagbar,
        children: [
            (0, i.jsx)(r.Text, {
                tag: 'span',
                color: 'always-white',
                variant: 'text-md/normal',
                children: c.intl.string(c.t['MG+Bzc'])
            }),
            (0, i.jsx)(r.NoticeButtonAnchor, {
                href: a.sQ.WARNING_SYSTEM_HELPCENTER_LINK,
                children: (0, i.jsx)(r.Text, {
                    variant: 'text-md/normal',
                    color: 'always-white',
                    children: c.intl.string(c.t['9JceHB'])
                })
            })
        ]
    });
}
function A(e) {
    let {} = e,
        t = (0, E.e7)([o.Z], () => o.Z.getAgeCheckStatus());
    return t === a.oE.NONE
        ? null
        : t === a.oE.SUCCESS
          ? (0, i.jsx)(r.HelpMessage, {
                messageType: r.HelpMessageTypes.POSITIVE,
                children: c.intl.format(c.t.maZDLy, { login: '/login' })
            })
          : t === a.oE.ERROR
            ? (0, i.jsx)(r.HelpMessage, {
                  messageType: r.HelpMessageTypes.ERROR,
                  children: c.intl.string(c.t['4sILBQ'])
              })
            : t === a.oE.FAILURE
              ? (0, i.jsx)(r.HelpMessage, {
                    messageType: r.HelpMessageTypes.ERROR,
                    children: c.intl.string(c.t['40R63t'])
                })
              : (0, i.jsx)(r.HelpMessage, {
                    messageType: r.HelpMessageTypes.INFO,
                    children: c.intl.string(c.t['nhhy/f'])
                });
}
function l() {
    return (0, i.jsxs)('div', {
        className: N.pageContainer,
        children: [(0, i.jsx)(A, {}), (0, i.jsx)(s.Z, {})]
    });
}
function T() {
    return (
        null == (0, E.e7)([I.default], () => I.default.getSuspendedUserToken()) && (0, _.uL)(S.Z5c.LOGIN),
        (0, i.jsxs)('div', {
            className: N.container,
            children: [(0, i.jsx)(u, {}), (0, i.jsx)(l, {})]
        })
    );
}
