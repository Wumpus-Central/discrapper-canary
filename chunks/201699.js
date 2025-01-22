var i = r(384111),
    a = i.define('Time', function () {
        this.choice({
            utcTime: this.utctime(),
            generalTime: this.gentime()
        });
    }),
    o = i.define('AttributeTypeValue', function () {
        this.seq().obj(this.key('type').objid(), this.key('value').any());
    }),
    s = i.define('AlgorithmIdentifier', function () {
        this.seq().obj(this.key('algorithm').objid(), this.key('parameters').optional(), this.key('curve').objid().optional());
    }),
    l = i.define('SubjectPublicKeyInfo', function () {
        this.seq().obj(this.key('algorithm').use(s), this.key('subjectPublicKey').bitstr());
    }),
    u = i.define('RelativeDistinguishedName', function () {
        this.setof(o);
    }),
    c = i.define('RDNSequence', function () {
        this.seqof(u);
    }),
    d = i.define('Name', function () {
        this.choice({ rdnSequence: this.use(c) });
    }),
    f = i.define('Validity', function () {
        this.seq().obj(this.key('notBefore').use(a), this.key('notAfter').use(a));
    }),
    p = i.define('Extension', function () {
        this.seq().obj(this.key('extnID').objid(), this.key('critical').bool().def(!1), this.key('extnValue').octstr());
    }),
    h = i.define('TBSCertificate', function () {
        this.seq().obj(this.key('version').explicit(0).int().optional(), this.key('serialNumber').int(), this.key('signature').use(s), this.key('issuer').use(d), this.key('validity').use(f), this.key('subject').use(d), this.key('subjectPublicKeyInfo').use(l), this.key('issuerUniqueID').implicit(1).bitstr().optional(), this.key('subjectUniqueID').implicit(2).bitstr().optional(), this.key('extensions').explicit(3).seqof(p).optional());
    }),
    _ = i.define('X509Certificate', function () {
        this.seq().obj(this.key('tbsCertificate').use(h), this.key('signatureAlgorithm').use(s), this.key('signatureValue').bitstr());
    });
e.exports = _;
