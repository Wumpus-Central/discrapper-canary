t.d(i, { A: () => c });
var l = t(627968);
t(64700);
var s = t(861672),
    a = t(477782),
    n = t(960736),
    r = t(253932),
    d = t(652215),
    o = t(985018);
function c(e) {
    let { invite: i, closePopout: t } = e,
        c = r.tz.useSetting(),
        {
            nickname: u,
            dmsAllowed: h,
            showActivity: m,
            setNickname: _,
            setDmsAllowed: x,
            setShowActivity: g,
        } = (0, n.lD)(),
        A = i.is_nickname_changeable;
    return (0, l.jsxs)(s.W, {
        navId: "accept-invite-modal-settings-menu",
        onClose: t,
        "aria-label": o.intl.string(o.t["3D5yo/"]),
        onSelect: () => {},
        children: [
            A
                ? (0, l.jsx)(a.Yn, {
                      id: "accept-invite-modal-settings-nickname",
                      label: o.intl.string(o.t.me1lRk),
                      value: u,
                      onChange: _,
                      placeholder: o.intl.string(o.t["09Q8yp"]),
                      maxLength: d.d0r,
                  })
                : null,
            (0, l.jsx)(a.fP, {
                id: "accept-invite-modal-settings-dms",
                label: o.intl.string(o.t["/2ed37"]),
                action: x,
                checked: h,
            }),
            c
                ? (0, l.jsx)(a.fP, {
                      id: "accept-invite-modal-settings-activity",
                      label: o.intl.string(o.t.bN4m1G),
                      action: g,
                      checked: m,
                  })
                : null,
        ],
    });
}
