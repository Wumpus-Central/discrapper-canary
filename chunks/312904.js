n.d(t, { Z: () => a });
var r = n(73800);
let i = (e) => {
        e.effects.forEach((e) => {
            let { src: t } = e,
                n = document.createElement('link');
            (n.rel = 'prefetch'),
                (n.href = t),
                (n.onload = () => {
                    document.body.removeChild(n);
                }),
                document.body.appendChild(n);
        });
    },
    a = (e) => {
        r.useEffect(() => {
            if ('loading' === document.readyState) {
                let t = () => {
                    i(e);
                };
                return (
                    document.addEventListener('DOMContentLoaded', t),
                    () => {
                        document.removeEventListener('DOMContentLoaded', t);
                    }
                );
            }
            i(e);
        }, [e]);
    };
