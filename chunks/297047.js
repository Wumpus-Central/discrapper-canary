r.d(n, {
    Z: function () {
        return g;
    },
    q: function () {
        return m;
    }
});
var i = r(47120);
var a = r(200651);
r(192379);
var o = r(442837),
    s = r(481060),
    l = r(144144),
    u = r(592125),
    c = r(496675),
    d = r(944486),
    f = r(585483),
    p = r(51144),
    h = r(981631),
    _ = r(388032);
function m(e, n) {
    let { id: r } = e,
        i = '@'.concat(p.ZP.getUserTag(e, { decoration: 'never' })),
        a = '<@'.concat(r, '>');
    f.S.dispatchToLastSubscribed(h.CkL.INSERT_TEXT, {
        plainText: i,
        rawText: a
    }),
        null != n && l.Z.startTyping(n);
}
function g(e, n, r) {
    let [i, l] = (0, o.Wu)(
            [d.Z, u.Z, c.Z],
            () => {
                let e = d.Z.getChannelId(n),
                    r = u.Z.getChannel(e);
                return [e, null != r && (r.isMultiUserDM() || c.Z.can(h.Plq.SEND_MESSAGES, r))];
            },
            [n]
        ),
        f = r === h.IlC.POPOUT;
    if (!l || f) return null;
    function p() {
        m(e, i);
    }
    return (0, a.jsx)(s.MenuItem, {
        id: 'mention',
        label: _.intl.string(_.t.P8tvKC),
        action: p
    });
}
