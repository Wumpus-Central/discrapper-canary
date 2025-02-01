var i = n(384111),
    r = i.define('Time', function () {
        this.choice({
            utcTime: this.utctime(),
            generalTime: this.gentime()
        });
    }),
    a = i.define('AttributeTypeValue', function () {
        this.seq().obj(this.key('type').objid(), this.key('value').any());
    }),
    s = i.define('AlgorithmIdentifier', function () {
        this.seq().obj(this.key('algorithm').objid(), this.key('parameters').optional(), this.key('curve').objid().optional());
    }),
    o = i.define('SubjectPublicKeyInfo', function () {
        this.seq().obj(this.key('algorithm').use(s), this.key('subjectPublicKey').bitstr());
    }),
    l = i.define('RelativeDistinguishedName', function () {
        this.setof(a);
    }),
    u = i.define('RDNSequence', function () {
        this.seqof(l);
    }),
    c = i.define('Name', function () {
        this.choice({ rdnSequence: this.use(u) });
    }),
    d = i.define('Validity', function () {
        this.seq().obj(this.key('notBefore').use(r), this.key('notAfter').use(r));
    }),
    f = i.define('Extension', function () {
        this.seq().obj(this.key('extnID').objid(), this.key('critical').bool().def(!1), this.key('extnValue').octstr());
    }),
    _ = i.define('TBSCertificate', function () {
        this.seq().obj(this.key('version').explicit(0).int().optional(), this.key('serialNumber').int(), this.key('signature').use(s), this.key('issuer').use(c), this.key('validity').use(d), this.key('subject').use(c), this.key('subjectPublicKeyInfo').use(o), this.key('issuerUniqueID').implicit(1).bitstr().optional(), this.key('subjectUniqueID').implicit(2).bitstr().optional(), this.key('extensions').explicit(3).seqof(f).optional());
    }),
    p = i.define('X509Certificate', function () {
        this.seq().obj(this.key('tbsCertificate').use(_), this.key('signatureAlgorithm').use(s), this.key('signatureValue').bitstr());
    });
e.exports = p;
