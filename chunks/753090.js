n.d(t, { Z: () => i }), n(47120);
let i = {
    makeMemoizer: function (e) {
        let t = new Map();
        return (n) => {
            let i = t.get(n);
            return void 0 === i && ((i = e(n)), t.set(n, i)), i;
        };
    }
};
