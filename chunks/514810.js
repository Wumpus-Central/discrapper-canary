n.d(t, {
    N: () => s,
});
var i = n(64700),
    r = n(311907),
    l = n(287809),
    a = n(985018);

function s(e) {
    var t;
    let n = null == (t = e.linkedLobby) ? void 0 : t.linked_at,
        s = (0, r.bG)([l.default], () => {
            var t;
            return l.default.getUser(null == (t = e.linkedLobby) ? void 0 : t.linked_by);
        });
    return i.useMemo(() => {
        if (null == n) return;
        let e = new Date(n);
        return null != s
            ? a.intl.format(a.t["xPrJ+q"], {
                  username: s.username,
                  linkedAtDate: e,
              })
            : a.intl.formatToPlainString(a.t.EyygeM, {
                  linkedAtDate: e,
              });
    }, [n, s]);
}
