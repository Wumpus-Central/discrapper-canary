function i(e, t, n) {
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
    X5: () => r,
    a8: () => a,
    h8: () => s,
    xQ: () => o
});
class r {
    constructor(e) {
        i(this, 'id', void 0), i(this, 'text', void 0), (this.id = e), (this.text = e);
    }
}
var a = (function (e) {
        return (e.UP = 'UP'), (e.DOWN = 'DOWN'), e;
    })({}),
    s = (function (e) {
        return (e.GUILD = 'GUILD'), (e.TEXT_CHANNEL = 'TEXT_CHANNEL'), (e.GROUP_DM = 'GROUP_DM'), (e.VOICE_CHANNEL = 'VOICE_CHANNEL'), (e.USER = 'USER'), (e.HEADER = 'HEADER'), (e.APPLICATION = 'APPLICATION'), (e.SKU = 'SKU'), (e.LINK = 'LINK'), (e.IN_APP_NAVIGATION = 'IN_APP_NAVIGATION'), e;
    })({}),
    o = (function (e) {
        return (e.USER = '@'), (e.TEXT_CHANNEL = '#'), (e.VOICE_CHANNEL = '!'), (e.GUILD = '*'), (e.APPLICATION = '$'), e;
    })({});
