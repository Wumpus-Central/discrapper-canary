n.d(t, { w: () => a });
var r = n(192379),
    i = n(442837),
    l = n(594174),
    o = n(388032);
function a(e) {
    var t;
    let n = null == (t = e.linkedLobby) ? void 0 : t.linked_at,
        a = (0, i.e7)([l.default], () => {
            var t;
            return l.default.getUser(null == (t = e.linkedLobby) ? void 0 : t.linked_by);
        });
    return r.useMemo(() => {
        if (null == n) return;
        let e = new Date(n);
        return null != a
            ? o.NW.format(o.t['xPrJ+v'], {
                  username: a.username,
                  linkedAtDate: e
              })
            : o.NW.formatToPlainString(o.t.EyygeH, { linkedAtDate: e });
    }, [n, a]);
}
