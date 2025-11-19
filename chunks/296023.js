n.d(t, { w: () => o });
var i = n(473749),
    r = n(442837),
    l = n(594174),
    a = n(388032);
function o(e) {
    var t;
    let n = null == (t = e.linkedLobby) ? void 0 : t.linked_at,
        o = (0, r.e7)([l.default], () => {
            var t;
            return l.default.getUser(null == (t = e.linkedLobby) ? void 0 : t.linked_by);
        });
    return i.useMemo(() => {
        if (null == n) return;
        let e = new Date(n);
        return null != o
            ? a.intl.format(a.t["xPrJ+q"], {
                  username: o.username,
                  linkedAtDate: e,
              })
            : a.intl.formatToPlainString(a.t.EyygeM, { linkedAtDate: e });
    }, [n, o]);
}
