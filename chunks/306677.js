var i = n(620632),
    r = n(652215);
n.d(
    t,
    {},
    {
        Q: function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return i.Bo.post({
                url: r.Rsh.CONNECTIONS_CALLBACK(e),
                body: { ...t, insecure: n, friend_sync: r.txh.has(e) },
                oldFormErrors: !0,
                rejectWithError: (0, i.fT)(),
            });
        },
    },
);
