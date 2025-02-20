function r(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
n.d(t, {
    X5: () => i,
    a8: () => o,
    h8: () => a,
    xQ: () => s
});
class i {
    constructor(e) {
        r(this, 'id', void 0), r(this, 'text', void 0), (this.id = e), (this.text = e);
    }
}
var o = (function (e) {
        return (e.UP = 'UP'), (e.DOWN = 'DOWN'), e;
    })({}),
    a = (function (e) {
        return (e.GUILD = 'GUILD'), (e.TEXT_CHANNEL = 'TEXT_CHANNEL'), (e.GROUP_DM = 'GROUP_DM'), (e.VOICE_CHANNEL = 'VOICE_CHANNEL'), (e.USER = 'USER'), (e.HEADER = 'HEADER'), (e.APPLICATION = 'APPLICATION'), (e.SKU = 'SKU'), (e.LINK = 'LINK'), (e.IN_APP_NAVIGATION = 'IN_APP_NAVIGATION'), e;
    })({}),
    s = (function (e) {
        return (e.USER = '@'), (e.TEXT_CHANNEL = '#'), (e.VOICE_CHANNEL = '!'), (e.GUILD = '*'), (e.APPLICATION = '$'), e;
    })({});
