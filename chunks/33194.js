r.d(n, {
    Iu: function () {
        return s;
    },
    OS: function () {
        return l;
    },
    g6: function () {
        return c;
    },
    v3: function () {
        return u;
    }
});
var i = r(15729),
    a = r(877124);
let o = (0, i.U)(
    (0, a.tJ)(
        (e) => ({
            channelDismissTimestamps: {},
            queuedWarning: !1
        }),
        {
            name: 'shared-spaces-warning-storage',
            storage: (0, a.FL)(() => localStorage)
        }
    )
);
function s(e) {
    return o.getState().channelDismissTimestamps[e];
}
function l() {
    return o.getState().queuedWarning;
}
function u() {
    o.setState({ queuedWarning: !1 });
}
function c(e) {
    o.setState((n) => ({
        channelDismissTimestamps: {
            ...n.channelDismissTimestamps,
            [e]: Date.now()
        }
    }));
}
