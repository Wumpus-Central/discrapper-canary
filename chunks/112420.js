let i = null;
n.d(
    t,
    {},
    {
        C: function (e) {
            i = e;
        },
        v: function (e) {
            if (null == i) return null;
            try {
                return i(e);
            } catch (e) {
                return (console.error("[rpc] command interceptor threw; running the real handler", e), null);
            }
        },
    },
);
