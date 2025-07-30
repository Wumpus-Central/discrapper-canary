n.d(t, { w: () => a });
var i = n(73800),
    r = n(442837),
    l = n(594174),
    o = n(388032);
function a(e) {
    var t;
    let n = null == (t = e.linkedLobby) ? void 0 : t.linked_at,
        a = (0, r.e7)([l.default], () => {
            var t;
            return l.default.getUser(null == (t = e.linkedLobby) ? void 0 : t.linked_by);
        });
    return i.useMemo(() => {
        if (null == n) return;
        let e = new Date(n);
        return null != a
            ? o.intl.format(o.t['xPrJ+v'], {
                  username: a.username,
                  linkedAtDate: e
              })
            : o.intl.formatToPlainString(o.t.EyygeH, { linkedAtDate: e });
    }, [n, a]);
}
