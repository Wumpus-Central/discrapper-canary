n.d(t, { Z: () => r }), n(35282);
var l = n(981631),
    i = n(388032);
let r = {
    getStatus: function (e) {
        let t,
            n,
            r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        switch (e) {
            case l.hes.CONNECTING:
                (t = l.QKv.CONNECTING), (n = i.intl.string(i.t.MzW9sN));
                break;
            case l.hes.AUTHENTICATING:
                (t = l.QKv.CONNECTING), (n = i.intl.string(i.t.GxXwE2));
                break;
            case l.hes.AWAITING_ENDPOINT:
                (t = l.QKv.CONNECTING), (n = i.intl.string(i.t.xEbu0Q));
                break;
            case l.hes.RTC_CONNECTED:
                (t = l.QKv.CONNECTED), (n = r ? i.intl.string(i.t.HtVOdd) : i.intl.string(i.t.daXg45));
                break;
            case l.hes.RTC_CONNECTING:
                (t = l.QKv.CONNECTING), (n = i.intl.string(i.t.Gp51dl));
                break;
            case l.hes.ICE_CHECKING:
                (t = l.QKv.CONNECTING), (n = i.intl.string(i.t["rdCyA/"]));
                break;
            case l.hes.DTLS_CONNECTING:
                (t = l.QKv.CONNECTING), (n = i.intl.string(i.t.UvB3gV));
                break;
            case l.hes.NO_ROUTE:
                (t = l.QKv.ERROR), (n = i.intl.string(i.t.mGhOIi));
                break;
            case l.hes.RTC_DISCONNECTED:
                (t = l.QKv.ERROR), (n = i.intl.string(i.t.M7LDmE));
                break;
            case l.hes.DISCONNECTED:
            default:
                (t = l.QKv.ERROR), (n = i.intl.string(i.t.NLKQbx));
        }
        return {
            connectionStatus: t,
            connectionStatusText: n,
        };
    },
    getShortHostname: function (e) {
        return null == e ? "" : e.split(".")[0];
    },
};
