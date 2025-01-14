n.d(t, {
    w: function () {
        return o;
    }
});
var i = n(192379),
    l = n(442837),
    r = n(594174),
    a = n(388032);
function o(e) {
    var t;
    let n = null === (t = e.linkedLobby) || void 0 === t ? void 0 : t.linked_at,
        o = (0, l.e7)([r.default], () => {
            var t;
            return r.default.getUser(null === (t = e.linkedLobby) || void 0 === t ? void 0 : t.linked_by);
        });
    return i.useMemo(() => {
        if (null == n) return;
        let e = new Date(n);
        return null != o
            ? a.intl.format(a.t['xPrJ+v'], {
                  username: o.username,
                  linkedAtDate: e
              })
            : a.intl.formatToPlainString(a.t.EyygeH, { linkedAtDate: e });
    }, [n, o]);
}
