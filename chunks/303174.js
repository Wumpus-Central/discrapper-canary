n.r(s),
    n.d(s, {
        default: () => g,
    });
var t = n(627968);
n(64700);
var r = n(311907),
    a = n(397927),
    i = n(976860),
    l = n(961350),
    d = n(207913),
    c = n(210742),
    o = n(239093),
    u = n(652215),
    h = n(985018),
    p = n(90344);

function N() {
    return (0, t.jsxs)(a.$Td, {
        color: a.Hv$.DANGER,
        className: p.aL,
        children: [
            (0, t.jsx)(a.Text, {
                tag: "span",
                color: "always-white",
                variant: "text-md/normal",
                children: h.intl.string(h.t["MG+Bzb"]),
            }),
            (0, t.jsx)(a.eCN, {
                noticeType: u.kqX.SAFETY_SUSPENDED_USER_WARNING,
                href: o.d$.WARNING_SYSTEM_HELPCENTER_LINK,
                children: (0, t.jsx)(a.Text, {
                    variant: "text-md/normal",
                    color: "always-white",
                    children: h.intl.string(h.t["9JceHN"]),
                }),
            }),
        ],
    });
}

function x(e) {
    let {} = e,
        s = (0, r.bG)([d.A], () => d.A.getAgeCheckStatus());
    return s === o.qN.NONE
        ? null
        : s === o.qN.SUCCESS
          ? (0, t.jsx)(a.po8, {
                messageType: a.YCn.POSITIVE,
                children: h.intl.format(h.t.maZDL6, {
                    login: "/login",
                }),
            })
          : s === o.qN.ERROR
            ? (0, t.jsx)(a.po8, {
                  messageType: a.YCn.ERROR,
                  children: h.intl.string(h.t["4sILBU"]),
              })
            : s === o.qN.FAILURE
              ? (0, t.jsx)(a.po8, {
                    messageType: a.YCn.ERROR,
                    children: h.intl.string(h.t["40R63o"]),
                })
              : (0, t.jsx)(a.po8, {
                    messageType: a.YCn.INFO,
                    children: h.intl.string(h.t["nhhy/R"]),
                });
}

function R() {
    return (0, t.jsxs)("div", {
        className: p.$$,
        children: [(0, t.jsx)(x, {}), (0, t.jsx)(c.A, {})],
    });
}

function g() {
    return (
        null == (0, r.bG)([l.default], () => l.default.getSuspendedUserToken()) &&
            (0, i.pX)(u.BVt.LOGIN, {
                source: "suspended_user_safety_hub_page",
            }),
        (0, t.jsxs)("div", {
            className: p.kL,
            children: [(0, t.jsx)(N, {}), (0, t.jsx)(R, {})],
        })
    );
}
