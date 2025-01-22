var i, a, o;
function s(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
r.d(n, {
    X5: function () {
        return l;
    },
    a8: function () {
        return i;
    },
    h8: function () {
        return a;
    },
    xQ: function () {
        return o;
    }
});
class l {
    constructor(e) {
        s(this, 'id', void 0), s(this, 'text', void 0), (this.id = e), (this.text = e);
    }
}
!(function (e) {
    (e.UP = 'UP'), (e.DOWN = 'DOWN');
})(i || (i = {})),
    !(function (e) {
        (e.GUILD = 'GUILD'), (e.TEXT_CHANNEL = 'TEXT_CHANNEL'), (e.GROUP_DM = 'GROUP_DM'), (e.VOICE_CHANNEL = 'VOICE_CHANNEL'), (e.USER = 'USER'), (e.HEADER = 'HEADER'), (e.APPLICATION = 'APPLICATION'), (e.SKU = 'SKU'), (e.LINK = 'LINK'), (e.IN_APP_NAVIGATION = 'IN_APP_NAVIGATION');
    })(a || (a = {})),
    !(function (e) {
        (e.USER = '@'), (e.TEXT_CHANNEL = '#'), (e.VOICE_CHANNEL = '!'), (e.GUILD = '*'), (e.APPLICATION = '$');
    })(o || (o = {}));
