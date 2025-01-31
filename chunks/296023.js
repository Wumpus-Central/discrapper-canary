n.d(t, { w: () => s });
var i = n(192379),
    l = n(442837),
    a = n(594174),
    r = n(388032);
function s(e) {
    var t;
    let n = null === (t = e.linkedLobby) || void 0 === t ? void 0 : t.linked_at,
        s = (0, l.e7)([a.default], () => {
            var t;
            return a.default.getUser(null === (t = e.linkedLobby) || void 0 === t ? void 0 : t.linked_by);
        });
    return i.useMemo(() => {
        if (null == n) return;
        let e = new Date(n);
        return null != s
            ? r.intl.format(r.t['xPrJ+v'], {
                  username: s.username,
                  linkedAtDate: e
              })
            : r.intl.formatToPlainString(r.t.EyygeH, { linkedAtDate: e });
    }, [n, s]);
}
