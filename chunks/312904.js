n.d(t, { Z: () => a });
var i = n(192379);
let r = (e) => {
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
        i.useEffect(() => {
            if ('loading' === document.readyState) {
                let t = () => {
                    r(e);
                };
                return (
                    document.addEventListener('DOMContentLoaded', t),
                    () => {
                        document.removeEventListener('DOMContentLoaded', t);
                    }
                );
            }
            r(e);
        }, [e]);
    };
