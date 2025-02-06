n.d(t, { Z: () => s });
var l = n(981631),
    i = n(388032);
let s = {
    getStatus: function (e) {
        let t,
            n,
            s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        switch (e) {
            case l.hes.CONNECTING:
                (t = l.QKv.CONNECTING), (n = i.intl.string(i.t.MzW9sL));
                break;
            case l.hes.AUTHENTICATING:
                (t = l.QKv.CONNECTING), (n = i.intl.string(i.t.GxXwEx));
                break;
            case l.hes.AWAITING_ENDPOINT:
                (t = l.QKv.CONNECTING), (n = i.intl.string(i.t.xEbu0d));
                break;
            case l.hes.RTC_CONNECTED:
                (t = l.QKv.CONNECTED), (n = s ? i.intl.string(i.t.HtVOdX) : i.intl.string(i.t['daXg4+']));
                break;
            case l.hes.RTC_CONNECTING:
                (t = l.QKv.CONNECTING), (n = i.intl.string(i.t.Gp51dn));
                break;
            case l.hes.ICE_CHECKING:
                (t = l.QKv.CONNECTING), (n = i.intl.string(i.t.rdCyAw));
                break;
            case l.hes.DTLS_CONNECTING:
                (t = l.QKv.CONNECTING), (n = i.intl.string(i.t.UvB3gY));
                break;
            case l.hes.NO_ROUTE:
                (t = l.QKv.ERROR), (n = i.intl.string(i.t.mGhOIi));
                break;
            case l.hes.RTC_DISCONNECTED:
                (t = l.QKv.ERROR), (n = i.intl.string(i.t.M7LDmJ));
                break;
            case l.hes.DISCONNECTED:
            default:
                (t = l.QKv.ERROR), (n = i.intl.string(i.t.NLKQb2));
        }
        return {
            connectionStatus: t,
            connectionStatusText: n
        };
    },
    getShortHostname: function (e) {
        return null == e ? '' : e.split('.')[0];
    }
};
