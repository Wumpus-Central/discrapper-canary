n.d(t, { Z: () => i }), n(35282);
var l = n(981631),
    r = n(388032);
let i = {
    getStatus: function (e) {
        let t,
            n,
            i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        switch (e) {
            case l.hes.CONNECTING:
                (t = l.QKv.CONNECTING), (n = r.intl.string(r.t.MzW9sL));
                break;
            case l.hes.AUTHENTICATING:
                (t = l.QKv.CONNECTING), (n = r.intl.string(r.t.GxXwEx));
                break;
            case l.hes.AWAITING_ENDPOINT:
                (t = l.QKv.CONNECTING), (n = r.intl.string(r.t.xEbu0d));
                break;
            case l.hes.RTC_CONNECTED:
                (t = l.QKv.CONNECTED), (n = i ? r.intl.string(r.t.HtVOdX) : r.intl.string(r.t['daXg4+']));
                break;
            case l.hes.RTC_CONNECTING:
                (t = l.QKv.CONNECTING), (n = r.intl.string(r.t.Gp51dn));
                break;
            case l.hes.ICE_CHECKING:
                (t = l.QKv.CONNECTING), (n = r.intl.string(r.t.rdCyAw));
                break;
            case l.hes.DTLS_CONNECTING:
                (t = l.QKv.CONNECTING), (n = r.intl.string(r.t.UvB3gY));
                break;
            case l.hes.NO_ROUTE:
                (t = l.QKv.ERROR), (n = r.intl.string(r.t.mGhOIi));
                break;
            case l.hes.RTC_DISCONNECTED:
                (t = l.QKv.ERROR), (n = r.intl.string(r.t.M7LDmJ));
                break;
            case l.hes.DISCONNECTED:
            default:
                (t = l.QKv.ERROR), (n = r.intl.string(r.t.NLKQb2));
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
