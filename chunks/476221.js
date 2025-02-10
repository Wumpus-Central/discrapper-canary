n.d(t, { Z: () => o });
var i = n(981631),
    l = n(388032);
let o = {
    getStatus: function (e) {
        let t,
            n,
            o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        switch (e) {
            case i.hes.CONNECTING:
                (t = i.QKv.CONNECTING), (n = l.intl.string(l.t.MzW9sL));
                break;
            case i.hes.AUTHENTICATING:
                (t = i.QKv.CONNECTING), (n = l.intl.string(l.t.GxXwEx));
                break;
            case i.hes.AWAITING_ENDPOINT:
                (t = i.QKv.CONNECTING), (n = l.intl.string(l.t.xEbu0d));
                break;
            case i.hes.RTC_CONNECTED:
                (t = i.QKv.CONNECTED), (n = o ? l.intl.string(l.t.HtVOdX) : l.intl.string(l.t['daXg4+']));
                break;
            case i.hes.RTC_CONNECTING:
                (t = i.QKv.CONNECTING), (n = l.intl.string(l.t.Gp51dn));
                break;
            case i.hes.ICE_CHECKING:
                (t = i.QKv.CONNECTING), (n = l.intl.string(l.t.rdCyAw));
                break;
            case i.hes.DTLS_CONNECTING:
                (t = i.QKv.CONNECTING), (n = l.intl.string(l.t.UvB3gY));
                break;
            case i.hes.NO_ROUTE:
                (t = i.QKv.ERROR), (n = l.intl.string(l.t.mGhOIi));
                break;
            case i.hes.RTC_DISCONNECTED:
                (t = i.QKv.ERROR), (n = l.intl.string(l.t.M7LDmJ));
                break;
            case i.hes.DISCONNECTED:
            default:
                (t = i.QKv.ERROR), (n = l.intl.string(l.t.NLKQb2));
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
