i.d(t, { A: () => c });
var l = i(627968);
i(64700);
var n = i(397927),
    s = i(960736),
    a = i(253932),
    r = i(652215),
    d = i(985018);
function c(e) {
    let { invite: t, closePopout: i } = e,
        c = a.tz.useSetting(),
        {
            nickname: o,
            dmsAllowed: u,
            showActivity: m,
            setNickname: x,
            setDmsAllowed: h,
            setShowActivity: _,
        } = (0, s.lD)(),
        g = t.is_nickname_changeable;
    return (0, l.jsxs)(n.W1t, {
        navId: "accept-invite-modal-settings-menu",
        onClose: i,
        "aria-label": d.intl.string(d.t["3D5yo/"]),
        onSelect: () => {},
        children: [
            g
                ? (0, l.jsx)(n.YnB, {
                      id: "accept-invite-modal-settings-nickname",
                      label: d.intl.string(d.t.me1lRk),
                      value: o,
                      onChange: x,
                      placeholder: d.intl.string(d.t["09Q8yp"]),
                      maxLength: r.d0r,
                  })
                : null,
            (0, l.jsx)(n.fPC, {
                id: "accept-invite-modal-settings-dms",
                label: d.intl.string(d.t["/2ed37"]),
                action: h,
                checked: u,
            }),
            c
                ? (0, l.jsx)(n.fPC, {
                      id: "accept-invite-modal-settings-activity",
                      label: d.intl.string(d.t.bN4m1G),
                      action: _,
                      checked: m,
                  })
                : null,
        ],
    });
}
