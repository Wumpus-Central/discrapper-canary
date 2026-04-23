"use strict";
n.d(t, { i: () => a });
var r = n(64700),
    i = n(183636),
    s = n(469177);
function a(e) {
    let t = i.A.useCanUIRequestGatewaySocket();
    r.useEffect(() => {
        if (t)
            return (
                s.uG(e),
                () => {
                    s.qr(e);
                }
            );
    }, [e, t]);
}
