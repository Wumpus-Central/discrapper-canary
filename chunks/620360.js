n.d(t, { Z: () => r });
var i = n(570140),
    l = n(211644);
let r = {
    init() {
        i.Z.subscribe('CONNECTION_OPEN', () => {
            (0, l.mc)();
        }),
            i.Z.subscribe('LOGOUT', () => {
                (0, l.mc)();
            });
    }
};
