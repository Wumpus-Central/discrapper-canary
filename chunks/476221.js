n.d(t, { Z: () => i }), n(301563);
var r = n(981631),
    l = n(388032);
let i = {
    getStatus: function (e) {
        let t,
            n,
            i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        switch (e) {
            case r.hes.CONNECTING:
                (t = r.QKv.CONNECTING), (n = l.NW.string(l.t.MzW9sL));
                break;
            case r.hes.AUTHENTICATING:
                (t = r.QKv.CONNECTING), (n = l.NW.string(l.t.GxXwEx));
                break;
            case r.hes.AWAITING_ENDPOINT:
                (t = r.QKv.CONNECTING), (n = l.NW.string(l.t.xEbu0d));
                break;
            case r.hes.RTC_CONNECTED:
                (t = r.QKv.CONNECTED), (n = i ? l.NW.string(l.t.HtVOdX) : l.NW.string(l.t['daXg4+']));
                break;
            case r.hes.RTC_CONNECTING:
                (t = r.QKv.CONNECTING), (n = l.NW.string(l.t.Gp51dn));
                break;
            case r.hes.ICE_CHECKING:
                (t = r.QKv.CONNECTING), (n = l.NW.string(l.t.rdCyAw));
                break;
            case r.hes.DTLS_CONNECTING:
                (t = r.QKv.CONNECTING), (n = l.NW.string(l.t.UvB3gY));
                break;
            case r.hes.NO_ROUTE:
                (t = r.QKv.ERROR), (n = l.NW.string(l.t.mGhOIi));
                break;
            case r.hes.RTC_DISCONNECTED:
                (t = r.QKv.ERROR), (n = l.NW.string(l.t.M7LDmJ));
                break;
            case r.hes.DISCONNECTED:
            default:
                (t = r.QKv.ERROR), (n = l.NW.string(l.t.NLKQb2));
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
